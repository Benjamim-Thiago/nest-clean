import { InMemoryAnswerCommentsRepository } from 'test/repositories/in-memory-answer-comments-repository'
import { OnAnswerCommentCreated } from '../on-answer-comment-created'
import { makeAnswerComment } from 'test/factories/make-answer-comment'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'

let inMemoryStudentsRepository: InMemoryStudentsRepository
let inMemoryAnswerCommentsRepository: InMemoryAnswerCommentsRepository

describe('On Answer comment Created', () => {
  beforeEach(() => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    inMemoryAnswerCommentsRepository = new InMemoryAnswerCommentsRepository(
      inMemoryStudentsRepository,
    )
  })

  it('should  send a notification when an answer comment is created', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    new OnAnswerCommentCreated()

    const answer = makeAnswerComment()

    inMemoryAnswerCommentsRepository.create(answer)
  })
})
