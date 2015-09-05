using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class Customer
    {
        [Key]
        public long CustomerId { get; set; }

        // Personal Details
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string gender { get; set; }
        public string MaritalStatus { get; set; }

        // Contact Details
        public IEnumerable<string> AddressLines { get; set; }
        public string HomePhone { get; set; }
        public string MobilePhone { get; set; }

        // Work Details
        public string WorkPhone { get; set; }

    }
}