import { get } from "enmity/api/settings";
import { Text, View } from 'enmity/components';
import { getByProps } from "enmity/metro";
import { React, Toasts, Users } from "enmity/metro/common";
import { Icons } from "../common";
import manifest from "../../manifest.json";
import showAlert from "./Alert";
import Button from "./Button";
import { addReview, getReviews } from '../common/RDBAPI';
import Review from "./Review";
import ReviewActionSheet, { renderActionSheet } from "./ReviewActionSheet";
import styles from "./StyleSheet";
import { ReviewContentProps } from './types';

const LazyActionSheet = getByProps("openLazy", "hideActionSheet");

interface ReviewsSectionProps {
  userID: string;
  currentUserID: string;
  admins: string[]
}

export default ({ userID, currentUserID = Users.getCurrentUser()?.id, admins = [] }: ReviewsSectionProps) => {
  const [reviews, setReviews] = React.useState<Array<ReviewContentProps>>();

  // this will update whenever this component is rerendered (as its not state or in a useEffect), aka when the reviews are set. therefore, this *should* display the correct info.
  const existingReview = reviews?.find((review: object) => review["senderdiscordid"] === currentUserID);

  React.useEffect(() => {
    getReviews(userID).then(state => {
      setReviews(state)
    });
  }, [])

  return <>
    <View style={styles.container}>
      <Text style={styles.eyebrow}>
        User Reviews
      </Text>
    </View>
    <View style={styles.reviewWindow}>
      <View style={styles.container}>
        {reviews && reviews.length > 0
        ? reviews.map((item: ReviewContentProps) => <Review
            item={item}
            onSubmit={() => renderActionSheet(ReviewActionSheet, {
                onConfirm: () => LazyActionSheet?.hideActionSheet(), 
                item, currentUserID, admins
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
      </View>
      <Button
        text={existingReview ? "Update Review" : "Create Review"}
        image={existingReview ? "ic_edit_24px" : "img_nitro_star"}
        onPress={() => {
          // this does not need to be a seperate function as its only used once, but it is cleaner this way.
          // as this is now an alert which closes the profile, state is not required for this as the profile must be reopened, rendering the reviews anyways
          // hence, setting the new reviews is not required either. the only thing required is to set the input to "" to clear its content from beforehand.
          showAlert({
            title: existingReview ? "Update Review" : "Create Review",
            confirmText: existingReview ? "Update" : "Create",
            placeholder: `Tap here to ${existingReview ? "update your existing review" : "create a new review"}...`,
            onConfirm: (input: string, setInput: Function) => {
              if (input) {
                addReview({
                  "userid": userID,
                  "comment": input.trim(),
                  "token": get(manifest.name, "rdbToken", "")
                }).then(() => setInput?.(""));
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
      />
    </View>
  </>
}
