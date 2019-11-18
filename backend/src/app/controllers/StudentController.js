import * as Yup from 'yup';

import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();

    return res.json(students);
  }

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

    const emailExists = await Student.findOne({
      where: { email: req.body.email },
    });
    if (emailExists) {
      return res.status(400).json({ error: 'E-mail already registered!' });
    }

    const { id, name, age, weight, height } = await Student.create(req.body);

    return res.json({ id, name, age, weight, height });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      age: Yup.string(),
      weight: Yup.string(),
      height: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails!' });
    }

    /**
     * Check if students exists
     */
    const students = await Student.findByPk(req.params.id);
    if (!students) {
      return res.status(400).json({ error: 'Student not exists!' });
    }

    /**
     * Check if email already exists
     */
    const { email } = req.body;
    if (email !== students.email) {
      const emailExists = await Students.findOne({
        where: { email },
      });

      if (emailExists) {
        return res.status(400).json({ error: 'E-mail already registered!' });
      }
    }

    const { id, name, age, weight, height } = await students.update(req.body);

    return res.json({ id, name, age, weight, height });
  }

  async delete(req, res) {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(400).json({ error: 'Student not exists!' });
    }

    await student.destroy();

    return res.json(student);
  }
}

export default new StudentController();
