import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  // console.log(currentemail);

  const TemplateID = "template_3lsztov";
  const EmailServices = "service_ov1golo";

  const sendEmail = (event) => {
    console.log("clicking the post", form.current);
    event.preventDefault();
    const emailname = form.current.name.value;
    const email = form.current.email.value;
    // console.log(emailname, email);
    const subjcet = form.current.subject.value;
    const message = form.current.message.value;
    const userEmail = { emailname, email, subjcet, message };
    console.log(userEmail);

    emailjs
      .sendForm(EmailServices, TemplateID, form.current, {
        publicKey: "eNMOg_xGl5v-nx2Wy",
      })
      .then(
        () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Email has been SuccessFully",
            showConfirmButton: false,
            timer: 2000,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="w-5/6 mt-20 mx-auto">
      <div className="md:flex gap-4 items-center justify-between">
        <div className="w-full">
          <div className="space-y-8 mb-10 ">
            <span className="my-2 mx-4 font-thin border-[#ff014f] border  rounded-sm px-5 py-2  text-[#ff014f]">
              GET IN TOUCH
            </span>

            <h3 className="text-5xl font-extrabold text-[#c4cfde] tracking-wid  ">
              Let's make your <br /> brand brilliant!
            </h3>

            <p className="text-white">
              It will be my pleasure to work with you and make your brand more
              brilliant. I am always ready to help you. If you have any query,
              please feel free to contact with me.
            </p>
            <h3 className="md:text-4xl font-extrabold text-[#c4cfde] tracking-wid  ">
              +8801568084061 <br /> mahmud.mhb1@gmail.com
            </h3>

            <div className="flex sm:flex-row  items-center gap-5">
              <Link
                to={
                  "https://drive.google.com/file/d/1kzjHo3xuLEO7S850ndB413YcWz_gtLlm/view?usp=sharing"
                }
                target="_blank"
              >
                <button className=" my-3 px-8 hover:bg-[#8954f7] text-[#8954f7] hover:text-white duration-500 py-2 text-xl rounded-3xl border border-[#8954f7]">
                  Download CV
                </button>
              </Link>
              <div className="space-x-4">
                <h1 className="my-2 mx-4 font-thin text-[#ff014f]">
                  FIND WITH ME
                </h1>
                <Link to="https://github.com/Mahmudmhb/" target="blank">
                  <button className="p-2 rounded-full hover:bg-[#8954f7] text-[#8954f7] border-[#8954f7] hover:text-white duration-500   border">
                    <FaGithub className=" text-2xl" />
                  </button>
                </Link>
                <a
                  href="https://www.linkedin.com/in/mahmudul-hasan-6b2bb9226/"
                  target="blank"
                >
                  <button className="p-2 rounded-full hover:bg-[#8954f7] text-[#8954f7] border-[#8954f7] hover:text-white duration-500   border">
                    <FaLinkedinIn className=" text-2xl" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="w-full">
          <div className="space-y-10">
            <div className="flex gap-4 ">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="bg-[#1d1d1d] w-full rounded py-3 text-white"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="bg-[#1d1d1d] w-full rounded  py-3 text-white"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
              className="bg-[#1d1d1d] w-full  py-3 rounded text-white"
            />
            <textarea
              name="message"
              id=""
              rows="5"
              required
              //   cols="10"
              placeholder="Messages"
              className="bg-[#1d1d1d]   w-full rounded text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full  rounded-3xl mt-10 border border-[#8954f7] py-3 hover:text-white text-[#8954f7] text-xl hover:bg-[#8954f7]"
          >
            Lets Talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs.sendForm('mahmud', 'template_syu6dnq', form.current, 'user_yES1kTZV9ujsBfNf3w7Qg')
//     .then((result) => {
//          alert('Message sent successfully!');
//     }, (error) => {
//         alert(error.message);
//     });
//     e.target.reset();
// };

// return (
//     <div id="contact" className='text-center background py-5'>
//         <h2 className="fh-bold text-white ">CONTACT <span className="text-primary">ME</span></h2>

//             <div className="row">
//                 <div className=" col-12 col-md-6">
//                     <div>
//                         <img class="img-fluid"  src={image} alt="" />
//                     </div>
//                 </div>
//                 <div className="col-12 col-md-6">

//                 <div className=" mt-5  pt-5">
//                     <form action="" ref={form} onSubmit={sendEmail}>
//                             <input type="text" class=" mb-3 rounded-3 w-75 py-1 " name="name" id="exampleFormControlInput1" placeholder="Your name" required/><br />
//                             <input type="email" class="mb-3 py-1 w-75 rounded-3" name="email" id="exampleFormControlInput1" placeholder="Your E-mail" required/> <br />

//                             <textarea class=" py-1 rounded-3 w-75 mb-3" required id="exampleFormControlTextarea1" name="message" placeholder="Your Message" rows="3"></textarea>
//                             <br />

//                             <input type="submit" className="btn btn-primary w-75 rounded-3 " value="SUBMIT"/>
//                     </form>

//         </div>

//                 </div>

//             </div>
//     </div>
// );
// };
