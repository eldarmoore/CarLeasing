using System.Collections.Generic;
using CarLeasingApp.API.Models;

namespace CarLeasingApp.API.Dtos
{
    public class UserForDetailesDto
    {

        public int Id { get; set; }
        public int PassportID { get; set; }
        public string FullName { get; set; }
        public string Username { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string Email { get; set; }
        public string PhotoUrl { get; set; }
        public ICollection<UserPhotosForDetailesDto> Photos { get; set; }
    }
}