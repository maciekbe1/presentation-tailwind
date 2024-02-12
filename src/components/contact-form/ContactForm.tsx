import { Button } from "../ui/button";

type ContactFormProps = {
  //define your props here
};

export const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <div>
      <h1 className="bold my-6 text-center text-5xl">Demo 1 Form</h1>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="rounded-md border border-gray-300 p-2"
        />
        <input
          type="text"
          placeholder="Surname"
          className="borde rounded-md border-gray-300 p-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded-md border border-gray-300 p-2"
        />
        <textarea
          placeholder="Message"
          className="rounded-md border border-gray-300 p-2"
        />
        <div className="flex flex-col">
          {/* accent-lime-400 */}
          <label>
            <input type="checkbox" className="mr-2" />I agree to the terms and
            conditions
          </label>
          <label>
            <input type="checkbox" className="mr-2" />I want to receive
            marketing information
          </label>
          <label>
            <input type="checkbox" className="mr-2" />I want to receive
            newsletter
          </label>
        </div>

        <div className="flex space-x-4">
          <label>
            <input type="radio" name="contact" value="email" className="mr-2" />
            Email
          </label>
          <label>
            <input type="radio" name="contact" value="phone" className="mr-2" />
            Phone
          </label>
          <label>
            <input type="radio" name="contact" value="mail" className="mr-2" />
            Mail
          </label>
        </div>
        <Button>Submit</Button>
        {/* className="bg-lime-400 hover:bg-lime-600" */}
      </form>
    </div>
  );
};
