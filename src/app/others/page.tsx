import Container from "@/components/Container";
import Card from "@/components/Card";

export default function OthersPage() {
  return (
    <Container className="pt-10">
      <h1 className="text-2xl font-semibold">Others</h1>
      <p className="mt-2 text-sm text-white/70">
        Leadership, volunteering, memberships, scholarships, and additional information.
      </p>

      <div className="mt-6 space-y-4">
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
