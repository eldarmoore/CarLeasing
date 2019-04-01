using System.Threading.Tasks;
using CarLeasingApp.API.Data;
using CarLeasingApp.API.Dtos;
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

        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {
            // Validate request

            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

            if (await _repo.UserExist(userForRegisterDto.Username))
                return BadRequest("Username already exists");

            var userToCreate = new User
            {
                Username = userForRegisterDto.Username
            };

            var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

            // Need to return CreatedAtRoute(), currently there's no method to get user ToDo later.
            return StatusCode(201);
        }
    }
}