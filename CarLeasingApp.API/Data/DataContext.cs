using CarLeasingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CarLeasingApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().Property(b => b.FullName).IsRequired();
            modelBuilder.Entity<User>().HasIndex(b => b.PassportID).IsUnique();
            modelBuilder.Entity<User>().Property(b => b.Username).IsRequired();
            modelBuilder.Entity<User>().Property(b => b.Gender).IsRequired();
            modelBuilder.Entity<User>().Property(b => b.Email).IsRequired();
            modelBuilder.Entity<User>().Property(b => b.PasswordHash).IsRequired();
            modelBuilder.Entity<User>().Property(b => b.PasswordSalt).IsRequired();
        }
        public DbSet<UserPhoto> UserPhotos { get; set; }
    }
}