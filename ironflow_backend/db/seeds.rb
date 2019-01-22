# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

arr= [
  { label: 'Front-end' },
  { label: 'Back-end' },
  { label: 'Full-stack' },
  { label: 'Middle-Tier' },
  { label: 'Web' },
  { label: 'Desktop' },
  { label: 'Mac' },
  { label: 'Mobile' },
  { label: 'Graphics' },
  { label: 'Design' },
  { label: 'Data' },
  { label: 'DevOps' },
  { label: 'Embedded' },
  { label: 'High-Level' },
  { label: 'Low-Level' },
  { label: 'WordPress' },
  { label: 'Security' },
  { label: 'Java' },
  { label: 'JavaScript' },
  { label: 'Ruby' },
  { label: 'Ruby on Rails' },
  { label: 'Environment' },
  { label: 'Rails' },
  { label: 'Heroku' },
  { label: 'Deployment' },
  { label: 'React' },
  { label: 'Embedded Ruby' },
  { label: 'PHP' },
  { label: 'Redux' },
  { label: 'Hooks' },
  { label: 'Other' },
  { label: 'Blogs' }
]

arr.each do |cat| puts Category.find_or_create_by title: cat[:label] end
