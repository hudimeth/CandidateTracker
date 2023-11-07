using Microsoft.EntityFrameworkCore;
using ReactCandidateTracker.Web.NewFolder2;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactCandidateTracker.Data
{
    public class CandidateTrackerRepo
    {
        private readonly string _connectionString;
        public CandidateTrackerRepo(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddCandidate(Candidate candidate)
        {
            using var context = new CandidateTrackerDbContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }
        public int GetCounts(Status status)
        {
            using var context = new CandidateTrackerDbContext(_connectionString);
            return context.Candidates.Where(c => c.Status == status).Count();
        }
        public List<Candidate> GetCandidates(Status status)
        {
            using var context = new CandidateTrackerDbContext(_connectionString);
            return context.Candidates.Where(c => c.Status == status).ToList();
        }
        public Candidate GetCandidateById(int id)
        {
            using var context = new CandidateTrackerDbContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }
        public void UpdateCandidateStatus(Candidate candidate)
        {
            using var context = new CandidateTrackerDbContext(_connectionString);
            context.Candidates.Update(candidate);
            context.SaveChanges();
        }
    }
}
