import testRouter from './routes/test';
import todoRouter from './routes/todo';
import userRouter from './routes/user';
import sessionRouter from './routes/session';
import siteRouter from './routes/site';
import categoryRouter from './routes/category';
import postRouter from './routes/post';
//
const Router = {
  /**
  * route
  * @param
  *
  * @return
  */  
  route: async function (pathname: string, req: any, res: any, env: any): Promise<Response>
  {
    let response;
    /* test */
    if (pathname === "/test2") {
      response = await testRouter.test2(req, res, env);
    }
    if (pathname === "/test3") {
      response = await testRouter.test3(req, res, env);
    }
    if (pathname === "/test/create") {
      response = await testRouter.create(req, res, env);  
    }
    if (pathname === "/test/get") {
      response = await testRouter.get(req, res, env);  
    }
    if (pathname === "/test/get_list") {
      response = await testRouter.get_list(req, res, env);  
    }
    if (pathname === "/test/delete") {
      response = await testRouter.delete(req, res, env);  
    }
    if (pathname === "/test/update") {
      response = await testRouter.update(req, res, env);  
    }
    //todo
    if (pathname === "/todos/create") {
      response = await todoRouter.create(req, res, env);  
    }
    if (pathname === "/todos/delete") {
      response = await todoRouter.delete(req, res, env);  
    }
    if (pathname === "/todos/update") {
      response = await todoRouter.update(req, res, env);  
    }
    if (pathname === "/todos/get") {
      response = await todoRouter.get(req, res, env);  
    }
    if (pathname === "/todos/get_list") {
      response = await todoRouter.get_list(req, res, env);  
    }
    if (pathname === "/todos/search") {
      response = await todoRouter.search(req, res, env);  
    }
    //sites
    if (pathname === "/sites/create") {
      response = await siteRouter.create(req, res, env);  
    }
    if (pathname === "/sites/delete") {
      response = await siteRouter.delete(req, res, env);  
    }
    if (pathname === "/sites/get") {
      response = await siteRouter.get(req, res, env);  
    }
    if (pathname === "/sites/get_list") {
      response = await siteRouter.get_list(req, res, env);  
    }
    //post
    if (pathname === "/posts/create") {
      response = await postRouter.create(req, res, env);  
    }
    if (pathname === "/posts/delete") {
      response = await postRouter.delete(req, res, env);  
    }
    if (pathname === "/posts/get") {
      response = await postRouter.get(req, res, env);  
    }
    if (pathname === "/posts/get_list") {
      response = await postRouter.get_list(req, res, env);  
    }
    if (pathname === "/posts/update") {
      response = await postRouter.update(req, res, env);  
    }
    //category
    if (pathname === "/category/create") {
      response = await categoryRouter.create(req, res, env);  
    }
    if (pathname === "/category/delete") {
      response = await categoryRouter.delete(req, res, env);  
    }
    if (pathname === "/category/get") {
      response = await categoryRouter.get(req, res, env);  
    }
    if (pathname === "/category/get_list") {
      response = await categoryRouter.get_list(req, res, env);  
    }
    if (pathname === "/category/update") {
      response = await categoryRouter.update(req, res, env);  
    }
    //user
    if (pathname === "/users/create") {
      response = await userRouter.create(req, res, env);  
    }
    if (pathname === "/users/get") {
      response = await userRouter.get(req, res, env);  
    }    
    //session
    if (pathname === "/session/create") {
      response = await sessionRouter.create(req, res, env);  
    }
    if (pathname === "/session/get") {
      response = await sessionRouter.get(req, res, env);  
    }
    if (pathname === "/session/delete") {
      response = await sessionRouter.delete(req, res, env);  
    }

    //@ts-ignore
    return response;
  },
}
export default Router;
