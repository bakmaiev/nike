import ReviewCard from "../components/ReviewCard";
import { leftAnimationVariant, reviews } from "../constants";
import { motion } from "framer-motion";

const CustomerReviews = () => {
  return (
    <motion.section
      variants={leftAnimationVariant}
      initial={leftAnimationVariant.hidden}
      whileInView={leftAnimationVariant.visible}
      transition={leftAnimationVariant.transition}
      viewport={{ once: true }}
      className="max-container"
    >
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default CustomerReviews;
