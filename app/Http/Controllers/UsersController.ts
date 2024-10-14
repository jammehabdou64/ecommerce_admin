import { Request, Response, Next, bcrypt, Auth } from "jcc-express-mvc";
import { User } from "@/Model/User";
import { UserRequest } from "@/Request/UserRequest";
export class UsersController {
  //

  async index(req: Request, res: Response, next: Next) {
    return res.json({
      message: await User.paginate(req, 15),
      success: true,
    });
  }

  //

  async store(req: Request, res: Response, next: Next) {
    const userRequest = new UserRequest(req);
    const save = await userRequest.save();

    return save //res.json({ message: save });
      ? res.json({ message: save, success: true })
      : res.json({ message: null, success: false });
  }

  //

  async show(req: Request, res: Response, next: Next) {
    return res.json({
      message: await User.find(req.params.user),
      success: true,
    });
  }

  //

  async update(req: Request, res: Response, next: Next) {
    const userRequest = new UserRequest(req);
    const save = await userRequest.save();
    return save
      ? res.json({
          message: await save,
          success: true,
        })
      : res.json({ message: null, success: false });
  }

  //

  async destroy(req: Request, res: Response, next: Next) {
    return res.json({
      message: await User.delete(req.params.user),
    });
  }
}
