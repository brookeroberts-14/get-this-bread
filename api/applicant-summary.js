import { applicants } from "../data/applicants.js";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const id = req.query.id;

  if (!id) {
    return res.status(400).json({
      error: "Applicant ID required"
    });
  }

  const applicant = applicants.find(
    a => a.id.toLowerCase() === id.toLowerCase()
  );

  if (!applicant) {
    return res.status(404).json({
      error: "Applicant not found"
    });
  }

  return res.status(200).json({
    id: applicant.id,
    name: applicant.name,
    jobTitle: applicant.jobTitle,
    status: applicant.status,
    source: applicant.source,
    appliedDate: applicant.appliedDate,
    recruiter: applicant.recruiter,
    email: applicant.email,
    phone: applicant.phone,
    location: applicant.location,
    skills: applicant.skills.join("; "),
    education: applicant.education,
    professionalSummary: applicant.professionalSummary,
    experienceSummary: applicant.experience
      .map(
        e => `${e.title} at ${e.company} (${e.dates})`
      )
      .join("; "),
    coverLetter: applicant.coverLetter
  });
}
