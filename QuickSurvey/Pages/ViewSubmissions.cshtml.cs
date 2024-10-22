using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;
using QuickSurvey.Models;

namespace QuickSurvey.Pages
{
    public class ViewSubmissionsModel : PageModel
    {
        public List<Submission> Submissions { get; set; } = new List<Submission>();

        public void OnGet()
        {
            //this will store submissions in-memory
            Submissions = SubmissionStore.Submissions; 
        }
    }
}