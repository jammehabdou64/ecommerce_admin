
  import {  FormRequest } = from "jcc-express-mvc";
  
 export class OrderRequest extends FormRequest {
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
  
  