using QuickSurvey.Models;


namespace QuickSurvey
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddRazorPages();
            builder.Services.AddControllers(); //added for api endpoint
            builder.Services.AddSingleton<SubmissionStore>();

            var app = builder.Build();

            
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapRazorPages();
            app.MapControllers();
            app.Run();
        }
    }
    public class SubmissionStore
    {
        public static List<Submission> Submissions { get; set; } = new List<Submission>();
    }
}