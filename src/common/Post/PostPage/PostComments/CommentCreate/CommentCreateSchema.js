import * as Yup from 'yup';



export const CommentCreateSchema = Yup.object().shape({
    content: Yup.string()
      .required()
      .max(100, "content is too long"),
  });


export default CommentCreateSchema;
