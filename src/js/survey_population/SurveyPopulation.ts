import {SurveyData} from  "./SurveyData";

/**
 * A population can represent the 'total' number of potential surveys
 * or a set of surveys from the 'total' number of surveys.
 */
interface SurveyPopulation {
    surveyData: SurveyData;
    population: SurveyPopulation[];
}

