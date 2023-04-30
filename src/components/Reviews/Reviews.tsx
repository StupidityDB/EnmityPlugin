import { get } from "enmity/api/settings";
import { Text, View } from 'enmity/components';
import { getByName, getByProps } from "enmity/metro";
import { Profiles, React, Toasts, Users } from "enmity/metro/common";
import manifest from "../../../manifest.json";
import { Icons } from "../../common";
import { addReview, getReviews } from '../../common/RDBAPI';
import styles from "../../common/StyleSheet";
import { Review as ReviewType, ReviewsSectionProps } from '../../def';
import showAlert from "../Dependent/Alert";
import Button from "../Dependent/Button";
import Review from "./Review";
import ReviewActionSheet, { renderActionSheet } from "./ReviewActionSheet";

const LazyActionSheet = getByProps("openLazy", "hideActionSheet");
const UserProfileSection = getByName("UserProfileSection");
const { FlatList } = getByProps("FlatList");
const OFFSET = 50;

const ReviewButton = ({ existingReview, userID }) => {
  return <View style={styles.container}>
    <Button
      text={`${existingReview ? "Update" : "Create"} Review`}
      image={existingReview ? "ic_edit_24px" : "img_nitro_star"}
      onPress={() => {
        // this does not need to be a seperate function as its only used once, but it is cleaner this way.
        // as this is now an alert which closes the profile, state is not required for this as the profile must be reopened, rendering the reviews anyways
        // hence, setting the new reviews is not required either. the only thing required is to set the input to "" to clear its content from beforehand.
        showAlert({
          title: `${existingReview ? "Update" : "Create"} Review`,
          confirmText: existingReview ? "Update" : "Create",
          placeholder: `Tap here to ${existingReview ? "update your existing review" : "create a new review"}...`,
          onConfirm: (input: string, setInput: Function) => {
            if (input) {
              addReview({
                "comment": input.trim(),
                "token": get(manifest.name, "rdbToken", "")
              }, userID).then(() => setInput(""));
            } else {
              Toasts.open({
                content: "Please enter a review before submitting.",
                source: Icons.Failed,
              });
            }
          },
          onAny: (userId: string) => setTimeout(() => Profiles.showUserProfile({ userId })),
          userID,
          existing: existingReview ? existingReview?.comment as string : undefined,
        });
      }}
      style={{ marginBottom: 10 }}
      textStyle={{ fontSize: 16 }}
      useGradient
    />
  </View>
}

export default ({ userID, currentUserID = Users.getCurrentUser()?.id, admins = [] }: ReviewsSectionProps) => {
  const [page, setPage] = React.useState<number>(0);
  const [reviews, setReviews] = React.useState<Array<ReviewType>>([]);
  const [existingReview, setExistingReview] = React.useState<any>(null);
  let pageRenders = 0;
  
  React.useEffect(() => {
    let shouldKill = false;

    pageRenders++;
    let currentRenders = pageRenders;

    setTimeout(() => {
      if (pageRenders === currentRenders) {
        getReviews(userID, page * OFFSET).then((fetchedReviews: ReviewType[] | undefined ) => {
          if (fetchedReviews) {
            if (shouldKill) return;
            if (fetchedReviews.length <= 0 && page !== 0) {
              Toasts.open({ content: "Exceeded maximum pages! Returning to 1.", source: Icons.Warning });
              return setPage(0);
            };
    
            setReviews(fetchedReviews);
            !existingReview && setExistingReview(fetchedReviews?.find((review: ReviewType) => review["sender"]["discordID"] === currentUserID));
            pageRenders = 0;
          }
        })
      }
    }, 300);
    
    return () => (shouldKill = true) && void 0;
  }, [page]);

  return <UserProfileSection showContainer title="Reviews" style={{ marginBottom: 16 }}>
    <ReviewButton existingReview={existingReview} userID={userID} />
    <Button 
      text={"Refresh Reviews"} 
      image={"ic_message_retry"} 
      onPress={() => {
        setReviews([]);
        setPage(page);
      }} 
      style={{
        marginVertical: 0
      }}
      innerStyle={{
        height: "auto",
        paddingBottom: 12,
        marginTop: -4
      }}
      textStyle={{
        fontSize: 12
      }}
      dangerous
    />
    <View style={{ flexDirection: "row", marginHorizontal: 12 }}>
      <Button 
        text={"Back"} 
        image="ic_arrow_back_24px" 
        onPress={() => setPage(prevPage => prevPage > 0 ? prevPage - 1 : prevPage)} 
        style={{ flex: 0.3 }}
        useGradient
        textDirection={"right"}
        disabled={page <= 0}
        textStyle={{ fontSize: 16, marginRight: 4 }}
      />
      <Button 
        text={`Page ${page + 1}`}
        onPress={() => Toasts.open({ content: `Current Page: ${page + 1}`, source: Icons.Self })}
        style={{ flex: 0.4, marginLeft: 12 }}
        useGradient
        useImage={false}
      />
      <Button 
        text={"Next"} 
        image="ic_arrow_forward_24px" 
        onPress={() => setPage(prevPage => reviews.length >= OFFSET ? prevPage + 1 : prevPage)} 
        style={{ flex: 0.3, marginLeft: 12 }}
        useGradient
        textDirection={"left"}
        disabled={reviews.length < OFFSET}
        textStyle={{ fontSize: 16, marginLeft: 4 }}
      />
    </View>
    <View style={styles.container}>
      {reviews && reviews.length > 0
        ? <FlatList 
          data={reviews}
          renderItem={({ item }) => <Review
            review={item}
            onSubmit={() => renderActionSheet(ReviewActionSheet, {
                onConfirm: () => LazyActionSheet?.hideActionSheet(),
                review: item, currentUserID, admins
              })
            }
          />}
          keyExtractor={(review: ReviewType) => review.id.toString()}
        />
        : <Text style={[
          styles.text,
          styles.safeText,
          styles.content,
          { alignSelf: "center" }
        ]}>
          No reviews yet. You could be the first!
        </Text>}
    </View>
    {reviews && reviews.length > 5 && <ReviewButton existingReview={existingReview} userID={userID} />}
  </UserProfileSection>
}
