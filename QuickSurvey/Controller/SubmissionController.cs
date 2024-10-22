using Microsoft.AspNetCore.Mvc;
using QuickSurvey.Models;

namespace QuickSurvey.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SubmissionController : ControllerBase
    {
        [HttpPost]
        public IActionResult Submit(Submission submission)
        {
            if (submission == null)
            {
                return BadRequest("Submission cannot be null.");
            }

            // Save the submission to the in-memory Submissionstore
            SubmissionStore.Submissions.Add(submission);

            return Ok();
        }
    }
}
