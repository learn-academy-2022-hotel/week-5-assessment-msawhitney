# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# Pseudocode
# Input: array, single letter
# Output:  array of all the words containing that letter
# Process: Create a function called find_words. 
# Create an array called matching_words.
# Iterate over each element/word in the original array and use include to see if it contains the required letter. 
# If it does add it to the created array. 
# Return the created array.
# Actual output as expected: ["coffee", "soda water"]
# ["tea", "water", "soda water"]

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def find_words(array, letter)
    matching_words = []
    #Iterate over each element in array - specify a variable called |word| 
    array.each do |word|
        #Check if word includes the required letter 
        if word.include?(letter)
        #If it does, add it to the matching_words array
        matching_words << word   
        end
    end   
    #Return the array of matching words
    return matching_words
end         

p find_words(beverages_array, letter_o)
p find_words(beverages_array, letter_t)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# Pseudocode
# Input: hash
# Output: a non-nested array that has all hash values 
# 1. at their own index 
# 2. alphabetical order
# Process: I'm reading about flattening arrays. 
# Create a variable called alpha_states to hold the result of flatten method (https://www.geeksforgeeks.org/ruby-hash-flatten-function/) 
# Chain the following: us_states, .values (to access values of us_states hash), .flatten, and then .sort (to alphabetize)
# Actual output as expected: ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

alpha_states = us_states.values.flatten.sort
# Variable (alpha_states) holds result of flattening values of hash (us_states) and those values are sorted (.sort)

p alpha_states

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudocode
# Create a Bike class and initialize it with default values. 
# Create a method that uses string interpolation to return a sentence about bike data. 
# Create an instance of the bike and print data. (Moved to define outside class to prevent error - see below)
# Actual output as expected: "The Trek bike has 2 wheels and is going 0 mph."

class Bike
    def initialize (model, wheels=2, current_speed=0)
        # Initialize a new Bike object with a model, wheels, and current speed.
        # Default number of wheels is 2, default speed is 0
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end
    def bike_info
        # Method returns a sentence with all the bike data.
        p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end    

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudocode
# Input: number 
# Output: for pedal_faster method - current_speed increased by given number
#         for brake method - current_speed reduced by given number unless current_speed is already less than given number (then current_speed is reduced to zero.) 
# Process: 
# 1. create a method called pedal_faster that adds given number to current speed
# 2. create a method called brake that uses a conditional statement to assign value to current_speed. Conditional statement checks to see if current_speed minus given number is greater than zero. If that is true, decreases current_speed by given number.
# If that is false, sets current_speed to zero.          
# Actual output as expected: 
# 10
# 28
# 23
# 0

def pedal_faster (speed)
    #Increases the speed by the given amount
    @current_speed += speed
end

def brake(speed)
    #If the current speed is more than the given amount, current speed is reduced by the given amount.
    if (@current_speed - speed) > 0
        @current_speed -= speed
    #Otherwise, the current speed is reduced to zero.    
    else
        @current_speed = 0
    end
end
end           

#Creates an instance of the bike, Trek model.
my_bike = Bike.new("Trek")
#Calls the method bike_info (prints sentence about bike info.)
my_bike.bike_info

#calls pedal_faster and brake methods on my_bike (with speed given as argument), prints current speed. Output as expected (see above)
p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18)
p my_bike.brake(5)
p my_bike.brake(25)