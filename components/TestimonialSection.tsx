// components/TestimonialSection.tsx
import { TestimonialItem } from '@/constants/types';
import React from 'react';
import { ScrollView, Text, View, Dimensions } from 'react-native'; // Import Dimensions for responsive card width
// No longer importing testimonialSectionStyles as styles are now in Tailwind classes
// import { testimonialSectionStyles as styles } from './styles';

const { width } = Dimensions.get('window'); // Get screen width for responsive card width

interface TestimonialSectionProps {
  testimonials: TestimonialItem[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => (
  <View>
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      className="my-medium" // marginVertical: SPACING.medium
    >
      {testimonials.map((testimonial, index) => (
        <View
          key={index}
          // testimonialCard style:
          // backgroundColor: COLORS.lightOrange -> bg-lightOrange
          // padding: SPACING.large -> p-large
          // borderRadius: BORDER_RADIUS.medium -> rounded-medium
          // width: width - (SPACING.large * 2) -> dynamic width calculation
          // marginRight: SPACING.medium -> mr-medium
          // ...SHADOWS.medium -> shadow-md
          // justifyContent: 'space-between' -> justify-between
          // minHeight: 200 -> min-h-[200px]
          className="bg-lightOrange p-large rounded-medium mr-medium shadow-md justify-between min-h-[200px]"
          style={{ width: width - (16 /* SPACING.large */ * 2) }} // (screen_width - (container_padding_horizontal * 2))
        >
          <Text
            // testimonialQuote style:
            // fontSize: 24 -> text-2xl (approx)
            // color: COLORS.vibrantAccent -> text-vibrantAccent
            // marginBottom: SPACING.small -> mb-small
            className="text-2xl text-vibrantAccent mb-small"
          >
            “
          </Text>
          <Text
            // testimonialText style:
            // fontStyle: 'italic' -> italic
            // color: COLORS.softText -> text-secondaryText (assuming softText maps to secondaryText)
            // fontSize: FONT_SIZES.medium -> text-base
            // lineHeight: FONT_SIZES.large -> leading-lg (approx, or custom line-height if defined)
            // flexGrow: 1 -> flex-grow
            className="italic text-secondaryText text-base leading-lg flex-grow"
          >
            {testimonial.quote}
          </Text>
          <Text
            // testimonialAuthor style:
            // textAlign: 'right' -> text-right
            // fontWeight: '600' -> font-semibold
            // color: COLORS.softText -> text-secondaryText
            // marginTop: SPACING.small -> mt-small
            // fontSize: FONT_SIZES.medium -> text-base
            className="text-right font-semibold text-secondaryText mt-small text-base"
          >
            - {testimonial.author}
          </Text>
        </View>
      ))}
    </ScrollView>
  </View>
);

export default TestimonialSection;