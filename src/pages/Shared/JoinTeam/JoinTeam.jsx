import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const JoinTeam = () => {
    return (
        <div className="mx-5">
            <SectionTitle heading={"Member Recruitment 2023"}></SectionTitle>
            <h3 className="mx-5 text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste natus error id nobis eius perferendis eos nemo ducimus quasi? Assumenda harum deserunt, fugiat dicta esse ad eum est iste impedit voluptate odit, culpa, laboriosam quasi a quis laudantium expedita magni inventore. Eius, consequuntur? Voluptatum similique soluta deleniti ea doloremque?</h3>
            <button className="flex justify-start mx-auto my-5 btn" onClick={() => document.getElementById('my_modal_3').showModal()}>JOIN NSTUSC</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                    </form>
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
        </div>
    );
};

export default JoinTeam;