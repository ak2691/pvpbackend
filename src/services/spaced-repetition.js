export const ReviewRating = {
    AGAIN: 0,  // remember nothing
    HARD: 1,   // pretty hard, didn't remember all parts
    GOOD: 2,   // correct but hard
    EASY: 3,   // perfectly recalled no effort
};


//SM-2 algorithm
export class SpacedRepetitionService {
    static MIN_EASE_FACTOR = 1.3;
    static DEFAULT_EASE_FACTOR = 2.5;
    /**
   * SM-2 params
   * 
   * @param {Object} currentState - { easeFactor, interval, repetitions }
   * @param {number} rating - ReviewRating enum value (0-3)
   * @returns {Object} { easeFactor, interval, repetitions, nextReviewDate }
   */
    static calculateNextReview(currentState, rating) {

    }
    static mapRatingToQuality(rating) {

    }
    static calculateNewEaseFactor(currentEF, quality) {

    }

    static async getDueCards(prisma, profileId, deckId, limit = 20) {

    }
}