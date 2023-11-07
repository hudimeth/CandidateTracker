using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactCandidateTracker.Data;
using ReactCandidateTracker.Web.NewFolder2;

namespace ReactCandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateTrackerController : ControllerBase
    {
        private string _connectionString;
        public CandidateTrackerController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpPost]
        [Route("addcandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateTrackerRepo(_connectionString);
            repo.AddCandidate(candidate);
        }
        [HttpGet]
        [Route("getcounts")]
        public int GetCounts(Status status)
        {
            var repo = new CandidateTrackerRepo(_connectionString);
            return repo.GetCounts(status);
        }
        [HttpGet]
        [Route("getcandidates")]
        public List<Candidate> GetCandidates(Status status)
        {
            var repo = new CandidateTrackerRepo(_connectionString);
            return repo.GetCandidates(status);
        }
        [HttpGet]
        [Route("getcandidatebyid")]
        public Candidate GetCandidateById(int id)
        {
            var repo = new CandidateTrackerRepo(_connectionString);
            return repo.GetCandidateById(id);
        }
        [HttpPost]
        [Route("updatecandidatestatus")]
        public void UpdateCandidateStatus(Candidate candidate)
        {
            var repo = new CandidateTrackerRepo(_connectionString);
            repo.UpdateCandidateStatus(candidate);
        }
    }
}
