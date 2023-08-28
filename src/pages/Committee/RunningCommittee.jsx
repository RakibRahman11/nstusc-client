import { Helmet } from "react-helmet-async";
import useCommittee from "../../hooks/useCommittee";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const RunningCommittee = () => {
    const [member] = useCommittee()
    const executive = member.filter(item => item.committee === 'Running committee')
    return (
        <div className="my-14">
            <Helmet>
                <title>NSTUSC | Committee 2023</title>
            </Helmet>
            <SectionTitle heading={"Committee 2023"}></SectionTitle>
            <div className="grid grid-cols-3 grid-rows-3 grid-rows-none gap-4">
                {
                    executive.map(item => <>
                        <div>
                            <img className="w-4/6 mx-auto rounded-lg mt-28" src={item.image} alt="" />
                            <div className="py-10 -mt-8 text-center rounded-b-3xl bg-cyan-100">
                                <h1 className="text-2xl font-semibold">{item.name}</h1>
                                <h1 className="text-xl">{item.designation}</h1>
                                <h3>Department: {item.department}</h3>
                                <h3>Session: {item.session}</h3>
                                <h3>Contact: {item.contact}</h3>
                                <h3>Mail address: {item.mail_address}</h3>
                            </div>
                        </div>
                    </>
                    )
                }
            </div>
        </div>
    );
};

export default RunningCommittee;