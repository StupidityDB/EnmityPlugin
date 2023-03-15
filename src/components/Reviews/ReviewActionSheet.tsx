// thank you again rosie :prayge:
import { View } from 'enmity/components';
import { getByProps, getModule } from "enmity/metro";
import { React, Toasts } from "enmity/metro/common";
import { Icons } from "../../common";
import Button from "../Dependent/Button";
import { canDeleteReview, deleteReview, reportReview } from '../../common/RDBAPI';
import Review from './Review';
import { ReviewActionSheetProps } from '../../common/types';

const ActionSheet = (getModule(x => x.default?.render?.name == "ActionSheet") ?? { default: { render: false } }).default.render;
const BottomSheetScrollView = getByProps("BottomSheetScrollView").BottomSheetScrollView;
const LazyActionSheet = getByProps("openLazy", "hideActionSheet");
const Clipboard = getByProps("setString");

export function renderActionSheet(component: any, props: { [key: string]: any }) {
  ActionSheet
    ? LazyActionSheet?.openLazy(new Promise(r => r({ default: component })), "ReviewActionSheet", props)
    : Toasts.open({ content: "You cannot open ActionSheets on this version! Upgrade to 163+", source: Icons.Failed });
};

export default function ReviewActionSheet({ onConfirm, review, currentUserID, admins }: ReviewActionSheetProps) {
  // it is not scrollable, meaning the height is not predefined, and takes up however much is required to render the content, up to half of the screen.
  return <ActionSheet>
    <BottomSheetScrollView contentContainerStyle={{ marginBottom: 10 }}>
      <View style={{
        flexDirection: "column",
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 14,
        marginBottom: 14,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Review
          review={review}
          onSubmit={() => {}}
        />

        {Boolean(review["comment"]) && <Button
          text="Copy Text"
          image="ic_message_copy"
          onPress={() => {
            Clipboard.setString(review["comment"])
            Toasts.open({ content: "Copied to clipboard!", source: Icons.Success })
            onConfirm()
          }}
        />}
        {Boolean(review["id"]) && <Button
          text="Copy ID"
          image="ic_copy_id"
          onPress={() => {
            Clipboard.setString((review["id"])?.toString())
            Toasts.open({ content: "Copied to clipboard!", source: Icons.Success })
            onConfirm()
          }}
        />}
        {canDeleteReview(review, currentUserID, admins) && <Button
          text="Delete Review"
          image="ic_message_delete"
          dangerous
          onPress={() => {
            deleteReview(review["id"], review["sender"]["discordID"]).then(() => {
              onConfirm()
            })
          }}
        />}
        {Boolean(review["id"]) && <Button
          text="Report Review"
          image="ic_warning_24px"
          dangerous
          onPress={() => {
            reportReview(review["id"]).then(() => {
              onConfirm()
            })
          }}
        />}
      </View>
    </BottomSheetScrollView>
  </ActionSheet>
}
