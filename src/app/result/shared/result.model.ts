import { 
    TestQuestionType, 
    TestQuestionImportance
} from '../../app-config'

export class Result {
    questionTitle: string
    question: string
    type: TestQuestionType
    importance: TestQuestionImportance
    userAnswers: Array<number>
    correctAnswers: Array<number>
    isCorrect: Boolean
}