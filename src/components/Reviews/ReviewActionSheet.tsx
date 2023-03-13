// thank you again rosie :prayge:
import { View } from 'enmity/components';
import { getByProps, getModule } from "enmity/metro";
import { React, Toasts } from "enmity/metro/common";
import { Icons } from "../../common";
import Button from "../Dependent/Button";
import { canDeleteReview, deleteReview, reportReview } from '../../common/RDBAPI';
import Review from './Review';
import { ReviewContentProps } from '../../common/types';

const ActionSheet = (getModule(x => x.default?.render?.name == "ActionSheet") ?? { default: { render: false } }).default.render;
const BottomSheetScrollView = getByProps("BottomSheetScrollView").BottomSheetScrollView;
const LazyActionSheet = getByProps("openLazy", "hideActionSheet");
const Clipboard = getByProps("setString");

export function renderActionSheet(component: any, props: { [key: string]: any }) {
  ActionSheet
    ? LazyActionSheet?.openLazy(new Promise(r => r({ default: component })), "ReviewActionSheet", props)
    : Toasts.open({ content: "You cannot open ActionSheets on this version! Upgrade to 163+", source: Icons.Failed })
}

interface ReviewActionSheetProps {
  onConfirm: Function;
  item: ReviewContentProps;
  currentUserID: string;
  admins: string[]
}

export default function ReviewActionSheet({ onConfirm, item, currentUserID, admins }: ReviewActionSheetProps) {
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
          item={item}
          onSubmit={() => {}}
        />

        {Boolean(item["comment"]) && <Button
          text="Copy Text"
          image="ic_message_copy"
          onPress={() => {
            Clipboard.setString(item["comment"])
            Toasts.open({ content: "Copied to clipboard!", source: Icons.Success })
            onConfirm()
          }}
        />}
        {Boolean(item["id"]) && <Button
          text="Copy ID"
          image="ic_copy_id"
          onPress={() => {
            Clipboard.setString((item["id"] as number).toString())
            Toasts.open({ content: "Copied to clipboard!", source: Icons.Success })
            onConfirm()
          }}
        />}
        {canDeleteReview(item, currentUserID, admins) && <Button
          text="Delete Review"
          image="ic_message_delete"
          dangerous
          onPress={() => {
            deleteReview(item["id"] as number).then(() => {
              onConfirm()
            })
          }}
        />}
        {Boolean(item["id"]) && <Button
          text="Report Review"
          image="ic_warning_24px"
          dangerous
          onPress={() => {
            reportReview(item["id"] as number).then(() => {
              onConfirm()
            })
          }}
        />}
      </View>
    </BottomSheetScrollView>
  </ActionSheet>
}
