
  import {  FormRequest } = from "jcc-express-mvc";
  
 export class ProductRequest extends FormRequest {
    constructor(req:Request) {
      super(req);
    }
  
  
    async rules ()
    {
        await this.apiValidate({
          //
        })
    }
  
    async save()
    {
      await this.rules()
    }
  }
  
  