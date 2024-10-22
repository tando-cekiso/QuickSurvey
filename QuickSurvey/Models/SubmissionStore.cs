using System.Collections.Generic;

namespace QuickSurvey.Models
{
    public static class SubmissionStore
    {
        // This will store all submissions
        private static List<Submission> _submissions = new List<Submission>();

        // Public property to access the submissions
        public static List<Submission> Submissions => _submissions;

        // Method to add a submission
        public static void AddSubmission(Submission submission)
        {
            _submissions.Add(submission);
        }
    }
}
