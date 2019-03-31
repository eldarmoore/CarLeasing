using System.Threading.Tasks;
using CarLeasingApp.API.Models;

namespace CarLeasingApp.API.Data
{
    public interface IAuthRepository
    {
         Task<User> RegisterAsync(User user, string password);
         Task<User> Login(string username, string password);
         Task<bool> UserExist(string username);
    }
}