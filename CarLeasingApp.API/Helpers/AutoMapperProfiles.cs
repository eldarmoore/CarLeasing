using AutoMapper;
using CarLeasingApp.API.Dtos;
using CarLeasingApp.API.Models;

namespace CarLeasingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();
            CreateMap<User, UserForDetailesDto>();
        }
    }
}