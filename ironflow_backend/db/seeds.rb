# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"
require "ui_faces"
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

# arr.each do |cat| Category.find_or_create_by title: cat[:label] end

# (0...120).each do |x|
#   @user = User.create name: "#{Faker::Name.first_name} #{Faker::Name.last_name}", email: Faker::Internet.email,password: "password", points: Faker::Number.number(2), image_url: UiFaces.face
#   @categories = [Category.find(rand(1..30)),Category.find(rand(1..30)),Category.find(rand(1..30)),Category.find(rand(1..30))]

#   @question = Question.find_or_create_by statement: Faker::Lorem.paragraph(rand(4), true), user_id: rand(1...x), categories: @categories, view_count: rand(122)

#  end

#  (1...999).each do |x|
#     @question = Question.find rand(1..199)

#     @user = User.find rand(1..50)

#     @answer = Answer.create user: @user, question: @question, statement: Faker::Lorem.paragraph(rand(0..4), true)




#   end
