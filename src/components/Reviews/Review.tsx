import { FormRow, Image, Text, TouchableOpacity, View } from "enmity/components";
import { bulk, filters } from "enmity/metro";
import { Profiles, React, Toasts, Users } from 'enmity/metro/common';
import { Icons } from '../../common';
import styles from "../../common/StyleSheet";
import { ReviewProps } from "../../def";

const [
  { ProfileGradientCard }, // used to render a card with the external colors being the user's profile theme. requires padding tobe set as a result.
  ProfileFetcher
] = bulk(
  filters.byProps("ProfileGradientCard"),
  filters.byProps("fetchProfile")
);

export default ({ review, onSubmit }: ReviewProps) => {
  const [formattedTime, setFormattedTime] = React.useState<string>();

  React.useEffect(() => {
    Boolean(review["timestamp"]) && setFormattedTime(new Date(review["timestamp"] * 1000)
        .toLocaleString(undefined, {
            hour: 'numeric',
            minute: 'numeric',
            day: 'numeric',
            month: 'numeric',
            year: 'numeric' })
        .split(",")
        .map(component => component.replace(/ /g, ""))
        .reverse()
        .join(" "));
  });

  // This was a lot easier than i thought, it automatically uses the correct profile theme colors when rendered.
  // if the user has no profile theme colors or this is not rendered inside of a profile, then the fallback color will be used.
  return <ProfileGradientCard style={styles.reviewContainer} fallbackBackground={styles.fallback.color}>
    <TouchableOpacity onPress={onSubmit}>
      <View style={{ padding: 8 }}>
        <TouchableOpacity
          onPress={() => {
            Users.getUser(review["sender"]["discordID"])
              ? Profiles.showUserProfile({ userId: review["sender"]["discordID"] })
              : ProfileFetcher.getUser(review["sender"]["discordID"]).then(() => Profiles.showUserProfile({ userId: review["sender"]["discordID"] }))
          }}
          style={styles.avatarContainer}
        >
          {Boolean(review["sender"]["profilePhoto"]) && <Image
            loading="lazy"
            style={styles.avatarAuthor}
            source={{
              uri: (review["sender"]["profilePhoto"] as string)?.replace("?size=128", "?size=48"),
            }}
          />}
          {Boolean(review["sender"]["username"]) && <View style={{ marginLeft: 6 }}>
            <Text style={[styles.mainText, styles.authorName]}>
              {review["sender"]["username"]}
            </Text>
          </View>}
          {review["type"] === 3 && <TouchableOpacity
            style={styles.systemContainer}
            onPress={() => Toasts.open({
              source: Icons.Shield,
              content: "This is an automated system review."
            })}
          >
            {/* @ts-ignore */}
            <FormRow.Icon source={Icons.Warning} style={[
              styles.systemIcon,
              styles.dangerousIcon
            ]} />
            <Text style={[
              styles.text,
              styles.mainText,
              styles.dangerousText,
              styles.systemText
            ]}>
              SYSTEM
            </Text>
          </TouchableOpacity>}
          {Boolean(review["sender"]["badges"]?.length > 0) && review["sender"]["badges"].map((badge: object) => <TouchableOpacity
            onPress={() => Toasts.open({
              source: {
                uri: badge["icon"]
              },
              content: badge["name"]
          })}>
            <Image
              loading="lazy"
              style={styles.badge}
              source={{
                uri: badge["icon"],
              }}
            />
          </TouchableOpacity>)}
          {Boolean(review["timestamp"]) && <Text style={{
              ...styles.mainText,
              ...styles.timestamp
          }}>
            {formattedTime}
          </Text>}
        </TouchableOpacity>
        <Text style={styles.messageContent}>
          {review["comment"] ?? "Invalid message content."}
        </Text>
      </View>
    </TouchableOpacity>
  </ProfileGradientCard>
}
