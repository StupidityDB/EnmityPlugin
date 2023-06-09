import { Constants, StyleSheet } from "enmity/metro/common";
import { Miscellaneous } from ".";

// the size of the author text, and the profile pictures, inside of a singular review. this is a constant so they all update simultaneously.
const AUTHOR_SIZE = 18;

const styles = StyleSheet.createThemedStyleSheet({
  // styles for various containers
  container: {
    marginTop: 12,
    marginLeft: 12,
    marginBottom: 4,
    alignSelf: 'flex-start',
    width: "95%"
  },
  reviewContainer: {
    borderRadius: 9,
    padding: 1,
    marginBottom: 8,
    width: "98%"
  },
  systemContainer: {
    marginLeft: 4,
    backgroundColor: Constants.ThemeColorMap.BACKGROUND_SECONDARY,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  formrowContainer: {
    width: '90%',
    marginLeft: '5%',
    borderRadius: 10,
    backgroundColor: Constants.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,
    ...Miscellaneous.shadow() /** @param shadow: Main shadow implementation */
  },
  creditsContainer: {
    paddingTop: 30,
    paddingLeft: 20,
    flexDirection: "row"
  },
  creditsTextContainer: {
    paddingLeft: 15,
    paddingTop: 5,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  // styles for button
  button: {
    width: '98%',
    height: 40,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },

  // styles for content
  content: {
    fontSize: 14,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
  },
  messageContent: {
    color: Constants.ThemeColorMap.TEXT_NORMAL,
    fontFamily: Constants.Fonts.DISPLAY_NORMAL,
    opacity: 0.985,
    fontSize: 16,
  },

  // styles for various texts
  text: {
    fontSize: 16,
    fontFamily: Constants.Fonts.DISPLAY_BOLD
  },
  mainText: {
    opacity: 0.975,
    letterSpacing: 0.25,
  },
  safeText: {
    color: Constants.ThemeColorMap.TEXT_NORMAL
  },
  dangerousText: {
    color: Constants.ThemeColorMap.TEXT_MUTED
  },
  fallback: {
    color: Constants.ThemeColorMap.BACKGROUND_SECONDARY_ALT
  },
  systemText: {
    fontSize: 12,
    paddingVertical: 2,
    paddingRight: 4
  },
  subheaderText: {
    color: Constants.ThemeColorMap.HEADER_SECONDARY,
    textAlign: 'center',
    margin: 10,
    marginBottom: 50,
    letterSpacing: 0.25,
    fontFamily: Constants.Fonts.PRIMARY_BOLD,
    fontSize: 14
  },
  sectionWrapperText: {
    color: Constants.ThemeColorMap.HEADER_SECONDARY,
    paddingLeft: "5.5%",
    paddingRight: 10,
    marginBottom: 10,
    letterSpacing: 0.25,
    fontFamily: Constants.Fonts.PRIMARY_BOLD,
    fontSize: 12
  },
  creditsMainText: {
    opacity: 0.975,
    letterSpacing: 0.25,
    fontFamily: Constants.Fonts.DISPLAY_NORMAL
  },
  creditsHeader: {
    color: Constants.ThemeColorMap.HEADER_PRIMARY,
    fontFamily: Constants.Fonts.DISPLAY_BOLD,
    fontSize: 25,
    letterSpacing: 0.25
  },
  creditsSubHeader: {
    color: Constants.ThemeColorMap.HEADER_SECONDARY,
    opacity: 0.975,
    fontSize: 12.75,
  },

  // styles for more obscure texts
  timestamp: {
    color: Constants.ThemeColorMap.HEADER_PRIMARY,
    fontFamily: Constants.Fonts.DISPLAY_NORMAL,
    opacity: 0.985,
    fontSize: 12,
    marginLeft: 4,
    marginTop: AUTHOR_SIZE/12
  },

  // styles for author part of review
  authorName: {
    color: Constants.ThemeColorMap.HEADER_PRIMARY,
    fontFamily: Constants.Fonts.DISPLAY_BOLD,
    fontSize: AUTHOR_SIZE,
    letterSpacing: 0.25,
    marginTop: -3
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 0,
    alignSelf: 'flex-start'
  },
  avatarAuthor: {
    width: AUTHOR_SIZE,
    height: AUTHOR_SIZE,
    borderRadius: 100,
    marginTop: 1,
  },

  // styles for badge
  badge: {
    width: AUTHOR_SIZE * 0.85,
    height: AUTHOR_SIZE * 0.85,
    marginTop: 1,
    marginLeft: 4,
  },

  // styles for icons in actionsheet buttons
  icon: {
    width: 16,
    height: 16,
    color: Constants.ThemeColorMap.INTERACTIVE_NORMAL,
  },
  systemIcon: {
    width: 12,
    height: 12,
    marginHorizontal: 4
  },
  dangerousIcon: {
    tintColor: Constants.ThemeColorMap.TEXT_MUTED
  },
  creditsImage: {
    width: 75,
    height: 75,
    borderRadius: 10
  },

  // styles for authentication page
  authContainer: {
    backgroundColor: Constants.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,
    flex: 0.5,
  },
  authCard: {
    backgroundColor: Constants.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,
    color: Constants.ThemeColorMap.TEXT_NORMAL
  },
  authHeader: {
    backgroundColor: Constants.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,
    shadowColor: 'transparent',
    elevation: 0,
  },
  authText: {
    color: Constants.ThemeColorMap.HEADER_PRIMARY,
    fontFamily: Constants.Fonts.PRIMARY_NORMAL,
    fontSize: 16,
    marginLeft: 16,
    backgroundColor: 'transparent'
  }
})

export default styles;
