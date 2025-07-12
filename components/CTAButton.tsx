// components/CTAButton.tsx
import { Link } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native'; // Removed 'View' import if not used, or added if implied by style.
// No longer importing ctaButtonStyles as styles are now in Tailwind classes
// import { ctaButtonStyles as styles } from './styles';

interface CTAButtonProps {
  text: string;
  href: string;
  subtitle?: string; // Make subtitle optional
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, href, subtitle }) => (
  <Link href={href as any} asChild>
    <TouchableOpacity
      // getStarted style:
      // backgroundColor: COLORS.primaryAction -> bg-primaryAction
      // paddingVertical: SPACING.medium * 1.5 -> py-6 (as SPACING.medium is 12, *1.5 = 18, closest tailwind padding values would be 16 or 20, py-6 is 24px for example. will adjust to py-4 or py-5 if needed)
      // paddingHorizontal: SPACING.extraLarge -> px-extraLarge (if 24px, then px-6)
      // borderRadius: BORDER_RADIUS.round -> rounded-full
      // alignItems: 'center' -> items-center
      // marginVertical: SPACING.extraLarge -> my-extraLarge (if 24px, then my-6)
      // ...SHADOWS.large -> shadow-lg
      className="bg-primaryAction py-6 px-extraLarge rounded-full items-center my-extraLarge shadow-lg"
    >
      <Text
        // getStartedText style:
        // color: COLORS.white -> text-white
        // fontWeight: 'bold' -> font-bold
        // fontSize: FONT_SIZES.h2 -> text-h2 (if h2 is 28px, it might map to text-2xl or custom text-h2 if in config)
        // textAlign: 'center' -> text-center
        className="text-white font-bold text-h2 text-center"
      >
        {text}
      </Text>
      {subtitle && (
        <Text
          // getStartedSubtitle style:
          // color: COLORS.white -> text-white
          // fontSize: FONT_SIZES.small -> text-sm
          // marginTop: SPACING.small / 2 -> mt-tiny (if SPACING.tiny is 4px)
          // opacity: 0.8 -> opacity-80
          // textAlign: 'center' -> text-center
          className="text-white text-sm mt-tiny opacity-80 text-center"
        >
          {subtitle}
        </Text>
      )}
    </TouchableOpacity>
  </Link>
);

export default CTAButton;