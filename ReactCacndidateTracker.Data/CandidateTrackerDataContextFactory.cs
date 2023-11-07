using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace ReactCandidateTracker.Data
{
    public class CandidateTrackerDataContextFactory : IDesignTimeDbContextFactory<CandidateTrackerDbContext>
    {
        public CandidateTrackerDbContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}ReactCandidateTracker.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();


            return new CandidateTrackerDbContext(config.GetConnectionString("conStr"));
        }
    }
}
