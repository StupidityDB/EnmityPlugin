import { get } from "enmity/api/settings";
import { Text, View } from 'enmity/components';
import { getByProps } from "enmity/metro";
import { React, Toasts, Users } from "enmity/metro/common";
import manifest from "../../../manifest.json";
import { Icons } from "../../common";
import { addReview, getReviews } from '../../common/RDBAPI';
import styles from "../../common/StyleSheet";
import { Review as ReviewType, ReviewsSectionProps, ConditionalSwappableProps } from '../../def';
import showAlert from "../Dependent/Alert";
import Button from "../Dependent/Button";
import Review from "./Review";
import ReviewActionSheet, { renderActionSheet } from "./ReviewActionSheet";

const LazyActionSheet = getByProps("openLazy", "hideActionSheet");
const ConditionalSwappable = ({ condition, north, south }: ConditionalSwappableProps) => {
  return <>
    {condition ? south : north}
    {condition ? north : south}
  </>
}

export default ({ userID, currentUserID = Users.getCurrentUser()?.id, admins = [] }: ReviewsSectionProps) => {
  const [reviews, setReviews] = React.useState<Array<ReviewType>>();

  // this will update whenever this component is rerendered (as its not state or in a useEffect), aka when the reviews are set. therefore, this *should* display the correct info.
  const existingReview = reviews?.find((review: ReviewType) => review["sender"]["discordID"] === currentUserID);

  React.useEffect(() => {
    getReviews(userID).then((reviews: ReviewType[] | undefined) => {
      reviews && setReviews(reviews)
    });
  }, [])

  return <>
    <View style={styles.container}>
      <Text style={styles.eyebrow}>
        User Reviews
      </Text>
    </View>
    <View style={styles.reviewWindow}>
      <ConditionalSwappable
        condition={Boolean(reviews && reviews.length > 5)}
        north={<View style={styles.container}>
          {reviews && reviews.length > 0
            ? reviews.map((review: ReviewType) => <Review
                review={review}
                onSubmit={() => renderActionSheet(ReviewActionSheet, {
                    onConfirm: () => LazyActionSheet?.hideActionSheet(),
                    review, currentUserID, admins
                  })
                }
              />)
            : <Text style={[
              styles.text,
              styles.safeText,
              styles.content,
              { alignSelf: "center" }
            ]}>
              No reviews yet. You could be the first!
            </Text>}
        </View>}
        south={<Button
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
              userID,
              existing: existingReview ? existingReview?.comment as string : undefined,
            });
          }}
          style={{
            paddingLeft: 9,
            paddingRight: 9,
            paddingTop: 6,
            paddingBottom: 6
          }}
        />}
      />
    </View>
  </>
}
