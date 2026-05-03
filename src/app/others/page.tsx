import Container from "@/components/Container";
import Card from "@/components/Card";

const reviewerActivities = [
  "IEEE Transactions on Communications (IEEE TCOM)",
  "IEEE Transactions on Wireless Communications (IEEE TWC)",
  "Journal of Networks and Computer Applications",
  "Journal of Computer Communications",
  "Springer International Conference on Computing Science, Communication and Security (COMS2)",
];

const administrativeWorks = [
  "Member, Program Self-Assessment Committee (PSAC), BAETE Accreditation",
  "Editor, Undergraduate and Postgraduate Syllabus of ETE, 2020 Version",
  "Editor, Publication Committee, 4th International Conference on Electrical, Computer and Telecommunication Engineering (ICECTE), 2022",
  "Course Advisor, 2018-19 session students",
  "Official Member and Fellow of Information System Engineering",
];

const certifications = [
  "Cisco Certified Network Associate (CCNA): Routing and Switching, Cisco Networking Academy",
  "IBM Data Science Professional Certificate, Coursera",
  "Python for Everybody Specialization, University of Michigan, Coursera",
  "Machine Learning, Stanford University, Coursera",
  "Machine Learning: Regression, University of Washington, Coursera",
  "Machine Learning with Big Data, UC San Diego, Coursera",
  "Advanced Machine Learning and Signal Processing, IBM, Coursera",
  "SQL for Data Science, UC Davis, Coursera",
  "Software Defined Networking, University of Chicago, Coursera",
];

export default function OthersPage() {
  return (
    <Container className="pt-10">
      <h1 className="text-2xl font-semibold">Others</h1>
      <p className="mt-2 text-sm text-white/70">
        Professional service, reviewing, administrative work, certifications, scholarships, and additional information.
      </p>

      <div className="mt-6 space-y-4">
        <Card>
          <div className="text-sm font-semibold">Reviewer Activities</div>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {reviewerActivities.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="text-sm font-semibold">Administrative & Departmental Work</div>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {administrativeWorks.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="text-sm font-semibold">Certifications & Online Courses</div>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {certifications.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="text-sm font-semibold">Leadership Experience</div>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li>• General Secretary, Joypurhat Zilla Association (Feb 2020 – Mar 2021)</li>
            <li>• Electronic Society of RUET (Feb 2017 – Oct 2017)</li>
          </ul>
        </Card>

        <Card>
          <div className="text-sm font-semibold">Volunteer Experience</div>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li>• Member, Volunteers for Bangladesh (Oct 2019 – Jul 2020)</li>
          </ul>
        </Card>

        <Card>
          <div className="text-sm font-semibold">Professional Memberships</div>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li>• International Association of Engineers (IAENG), Membership ID: 264018 (Sep 2020 – Present)</li>
          </ul>
        </Card>

        <Card>
          <div className="text-sm font-semibold">Scholarships</div>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li>• Undergraduate Scholarship (RUET)</li>
            <li>• Bangladesh Government Scholarship (HSC/SSC/JSC)</li>
          </ul>
        </Card>

        <Card>
          <div className="text-sm font-semibold">Languages & Interests</div>
          <div className="mt-3 text-sm text-white/75">
            <div>Languages: English (Proficiency), Hindi (Intermediate), Bangla (Native)</div>
            <div className="mt-2">Interests: Traveling, Documentation, Watching Films, Cooking</div>
          </div>
        </Card>
      </div>
    </Container>
  );
}
