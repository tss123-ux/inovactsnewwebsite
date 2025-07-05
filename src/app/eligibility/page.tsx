"use client";
import React from "react";
import { Github, Phone, FileText, Link, User, CheckCircle } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Inovact Opportunities
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Created to help students, freshers, and self-taught developers
            access real, verified jobs & internships—no matter their college
            background or network. We believe talent should speak for itself,
            not your college brand or connections.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Mission Statement */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our goal is to give every aspiring professional a fair shot by
            helping them build a Proof of Work (POW) profile that shows what
            they can actually do. By focusing on real projects, code, and skills
            instead of resumes alone, we make it easier for recruiters to
            discover and trust candidates with genuine abilities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            To do this effectively, we ask you to complete a few important
            steps. Here&apos;s why each step is needed, what data we collect,
            what we don&apos;t collect, and how it helps you:
          </p>
        </section>

        {/* Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mr-4">
                <span className="text-lg font-semibold text-gray-700">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Use the Same Email for GitHub and Inovact Social
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Why:</h4>
                <p className="text-gray-700">
                  Using the same email on both GitHub and Inovact Social helps
                  us reliably match your GitHub account to your Inovact profile.
                  This ensures that the repositories you share are verified as
                  yours, avoiding confusion or errors when linking your work.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">What we get:</h4>
                <p className="text-gray-700">
                  Confirmation that your Inovact Social email matches your
                  GitHub email.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  What we do NOT get:
                </h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>
                    We do not access your personal emails, inbox, or any private
                    messages.
                  </li>
                  <li>
                    We do not collect additional data from your email account.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  How it helps:
                </h4>
                <p className="text-gray-700">
                  Accurate matching allows recruiters to trust that the projects
                  linked on your profile are genuinely yours, increasing your
                  credibility.
                </p>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mr-4">
                <span className="text-lg font-semibold text-gray-700">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Connect Your GitHub Profile
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  What happens when you connect GitHub:
                </h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>
                    You connect your GitHub account using the official GitHub
                    authentication system.
                  </li>
                  <li>
                    You do not share your GitHub login credentials with us at
                    any point.
                  </li>
                  <li>
                    We only get read access permissions granted by you through
                    GitHub&apos;s secure Auth process.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  What data we access:
                </h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>
                    Repository names, GitHub profile name, and URLs of the
                    repositories you link to your projects on Inovact Social.
                  </li>
                  <li>
                    Read access to the code within those public repositories.
                  </li>
                  <li>
                    Metadata like the number of commits and your individual
                    contributions in those repositories.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  What we do with it:
                </h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>
                    Our AI analyzes your code in the linked repositories to
                    understand your coding practices, code structure, and areas
                    of expertise.
                  </li>
                  <li>
                    We use this analysis to generate an objective assessment of
                    your skills.
                  </li>
                  <li>
                    Recruiters viewing your profile can see the code quality for
                    each linked repository and gain insights into your real
                    abilities—not just keywords on a resume.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  What we do NOT do:
                </h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>
                    We do not get write access to your GitHub repositories.
                  </li>
                  <li>
                    We cannot modify, delete, or push any code to your
                    repositories.
                  </li>
                  <li>
                    We do not collect or store your GitHub login credentials.
                  </li>
                  <li>
                    We do not access any private information beyond what is
                    needed to analyze your linked repositories.
                  </li>
                  <li>
                    We do not collect or store any data unrelated to your linked
                    projects.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  Why this matters for you:
                </h4>
                <p className="text-gray-700">
                  Recruiters care about real, verifiable skills. By connecting
                  your GitHub and allowing read access to your project
                  repositories, you give them a transparent view of your code
                  quality, coding style, and contributions—dramatically
                  increasing your chances of being selected for the right
                  opportunities.
                </p>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mr-4">
                <span className="text-lg font-semibold text-gray-700">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Verify Your Phone Number
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Why:</h4>
                <p className="text-gray-700">
                  Verifying your phone number helps us confirm you are a real
                  person, not a bot or fake account. It also ensures employers
                  can contact you directly if they are interested in your
                  profile.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">What we get:</h4>
                <p className="text-gray-700">
                  Your phone number for verification and communication.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  What we do NOT do:
                </h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>
                    We do not share your phone number publicly on your profile.
                  </li>
                  <li>
                    We do not sell or share your phone number with unrelated
                    third parties.
                  </li>
                  <li>We do not use it for unsolicited calls or marketing.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  How it helps:
                </h4>
                <p className="text-gray-700">
                  A verified phone number increases trust with recruiters and
                  makes it easy for them to reach out when you apply.
                </p>
              </div>
            </div>
          </section>

          {/* Step 4 */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mr-4">
                <span className="text-lg font-semibold text-gray-700">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Upload at Least 3 Projects
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Why:</h4>
                <p className="text-gray-700">
                  Projects are your proof of work. Uploading at least three
                  projects demonstrates your hands-on experience, shows
                  consistency in your learning or professional journey, and
                  gives recruiters concrete examples of what you can build.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">What we get:</h4>
                <p className="text-gray-700">
                  Project titles, descriptions, technologies used, and GitHub
                  repository links.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  What we do NOT do:
                </h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>We do not claim ownership of your projects.</li>
                  <li>We do not modify your project content.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  How it helps:
                </h4>
                <p className="text-gray-700">
                  Well-documented projects make your profile stand out by
                  proving your abilities with real work samples.
                </p>
              </div>
            </div>
          </section>

          {/* Step 5 */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mr-4">
                <span className="text-lg font-semibold text-gray-700">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Link GitHub Repositories to Your Projects
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Why:</h4>
                <p className="text-gray-700">
                  When you link your GitHub repos to your Inovact projects, you
                  give recruiters direct access to your actual code, providing
                  transparency and credibility beyond your resume.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">What we get:</h4>
                <p className="text-gray-700">
                  The URLs of your GitHub repositories that you explicitly link
                  to your projects.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  What we do NOT do:
                </h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>
                    We do not access private repositories unless you make them
                    public and choose to link them.
                  </li>
                  <li>We do not edit or modify your repositories.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  How it helps:
                </h4>
                <p className="text-gray-700">
                  This step makes it easy for recruiters to review your
                  contributions, code quality, and technical skills.
                </p>
              </div>
            </div>
          </section>

          {/* Step 6 */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mr-4">
                <span className="text-lg font-semibold text-gray-700">6</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Update Your Skills in Your Profile
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Why:</h4>
                <p className="text-gray-700">
                  Listing your key skills (languages, tools, frameworks) helps
                  our platform and recruiters match you to the most relevant
                  opportunities. It also shows your areas of strength at a
                  glance.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">What we get:</h4>
                <p className="text-gray-700">
                  The skills you manually add to your profile.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  What we do NOT do:
                </h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>We do not collect or infer unrelated personal data.</li>
                  <li>
                    We do not share your skill data outside of matching you to
                    jobs or displaying it on your profile.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  How it helps:
                </h4>
                <p className="text-gray-700">
                  Accurate skills listings make your profile discoverable for
                  the right opportunities and improve the relevance of your job
                  matches.
                </p>
              </div>
            </div>
          </section>

          {/* Step 7 */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mr-4">
                <span className="text-lg font-semibold text-gray-700">7</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Click &quot;Apply Now&quot;
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Why:</h4>
                <p className="text-gray-700">
                  Once you&apos;ve completed all steps, clicking &quot;Apply
                  Now&quot; tells us you&apos;re ready to be considered for the
                  opportunity you&apos;re interested in.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">What we get:</h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>
                    Confirmation that you&apos;ve finished setting up your
                    profile.
                  </li>
                  <li>
                    Your profile details (projects, skills, GitHub analysis, and
                    contact info) at the time of applying.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  What we do NOT do:
                </h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>
                    We do not submit your profile to employers automatically
                    without your consent.
                  </li>
                  <li>
                    We do not share your information outside of applications you
                    initiate.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  How it helps:
                </h4>
                <p className="text-gray-700">
                  This ensures recruiters only see complete, verified profiles,
                  which increases your chances of moving forward in the hiring
                  process.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Summary */}
        <section className="bg-gray-900 text-white rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-semibold mb-4">Summary</h2>
          <p className="text-gray-300 leading-relaxed">
            Each step you complete is designed to strengthen your proof-of-work
            profile, helping you stand out to employers who want to see what you
            can actually do—not just what you claim on a resume. At every point,
            we only collect the data necessary to support your applications,
            never ask for unnecessary information, and never sell or misuse your
            data.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-center text-gray-600">
            Inovact Opportunities - Connecting talent with opportunity through
            verified proof of work
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
