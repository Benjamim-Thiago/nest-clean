import { InMemoryQuestionCommentsRepository } from 'test/repositories/in-memory-question-comments-repository'
import { OnQuestionCommentCreated } from '../on-question-comment-created'
import { makeQuestionComment } from 'test/factories/make-question-comment'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'

let inMemoryStudentsRepository: InMemoryStudentsRepository
let inMemoryQuestionCommentsRepository: InMemoryQuestionCommentsRepository

describe('On Question comment Created', () => {
  beforeEach(() => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    inMemoryQuestionCommentsRepository = new InMemoryQuestionCommentsRepository(
      inMemoryStudentsRepository,
    )
  })

  it('should  send a notification when an question comment is created', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    new OnQuestionCommentCreated()

    const question = makeQuestionComment()

    inMemoryQuestionCommentsRepository.create(question)
  })
})
