import { get } from "enmity/api/settings";
import { Text, TouchableOpacity, View } from 'enmity/components';
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
import { getIDByName } from "enmity/api/assets";

const LazyActionSheet = getByProps("openLazy", "hideActionSheet");
const UserProfileSection = getByName("UserProfileSection");
const { FlatList } = getByProps("FlatList");

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
  const [reviews, setReviews] = React.useState<Array<ReviewType>>();

  // this will update whenever this component is rerendered (as its not state or in a useEffect), aka when the reviews are set. therefore, this *should* display the correct info.
  const existingReview = reviews?.find((review: ReviewType) => review["sender"]["discordID"] === currentUserID);

  React.useEffect(() => {
    getReviews(userID).then((reviews: ReviewType[] | undefined) => { reviews && setReviews(reviews) });
  }, [])

  return <UserProfileSection showContainer title="Reviews" style={{ marginBottom: 16 }}>
    <ReviewButton existingReview={existingReview} userID={userID} />
    <Button 
      text={"Refresh Reviews"} 
      image={"img_nitro_star"} 
      onPress={() => {
        setReviews([]);
        getReviews(userID).then((reviews: ReviewType[] | undefined) => { 
          reviews && setReviews(reviews) 
          Toasts.open({ content: "Refreshed reviews!", source: Icons.Success })
        })
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
          keyExtractor={(review) => review?.id.toString()}
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
