using System.Threading.Tasks;
using CarLeasingApp.API.Data;
using CarLeasingApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace CarLeasingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo)
        {
            _repo = repo;
        }

        [HttpPost("register")]

        public async Task<IActionResult> Register(string username, string password)
        {
            // Validate request

            username = username.ToLower();

            if (await _repo.UserExist(username))
                return BadRequest("Username already exists");

            var userToCreate = new User
            {
                Username = username
            };

            var createdUser = await _repo.Register(userToCreate, password);

            // Need to return CreatedAtRoute(), currently there's no method to get user ToDo later.
            return StatusCode(201);
        }
    }
}