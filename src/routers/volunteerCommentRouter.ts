import { Router } from 'express';
import { VolunteerCommentController } from '../controllers/volunteerCommentController.js';
import { loginRequired } from '../middlewares/loginRequired.js';

const volunteerCommentRouter = Router();

volunteerCommentRouter.post(
  '/volunteerComments',
<<<<<<< Updated upstream
  VolunteerCommentController.postComment
=======
  loginRequired,
  VolunteerCommentController.postComment,
>>>>>>> Stashed changes
);

// 사용자가 작성한 댓글 게시물 제목 조회
volunteerCommentRouter.get(
  '/volunteerComments/users',
  loginRequired,
  VolunteerCommentController.getVolunteerByComment,
);

//봉사 모집하기 게시글의 특정 게시글의 댓글 조회
volunteerCommentRouter.get(
  '/volunteerComments/:volunteerId',
  VolunteerCommentController.getPostComment,
);

volunteerCommentRouter.patch(
  '/volunteerComments/:volunteerCommentId',
<<<<<<< Updated upstream
  VolunteerCommentController.patchComment
=======
  loginRequired,
  VolunteerCommentController.patchComment,
>>>>>>> Stashed changes
);

volunteerCommentRouter.delete(
  '/volunteerComments/:volunteerCommentId',
<<<<<<< Updated upstream
  VolunteerCommentController.deleteComment
=======
  loginRequired,
  VolunteerCommentController.deleteComment,
>>>>>>> Stashed changes
);

export { volunteerCommentRouter };
