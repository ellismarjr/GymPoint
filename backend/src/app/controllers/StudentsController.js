import * as Yup from 'yup';

import User from '../models/User';
import Students from '../models/Students';

class StudentsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.string().required(),
      weight: Yup.string().required(),
      height: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails!' });
    }

    const emailExists = await Students.findOne({
      where: { email: req.body.email },
    });
    if (emailExists) {
      return res.status(400).json({ error: 'E-mail already registered!' });
    }

    const { id, name, age, weight, height } = await Students.create(req.body);

    return res.json({ id, name, age, weight, height });
  }
}

export default new StudentsController();
