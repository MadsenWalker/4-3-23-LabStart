 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  // test("prove that 2 is the same as 2", () => {
  //   expect(2).toBe(2);
  // });

  describe('group of tests for formatTitle function', () => {

  testData('formatTitle should return a string', () => {
    let finalTitle = formalTitle(testData.title)
    expect(typeof finalTitle).toBe('string')
  })

  testData('formatTitle capitalizes the first letter of each word', () => {
    let finalTitle = formatTitle(testData.title)
    expect(finalTitle).toBe("Nulla Ac")
  })

})


describe('groups of tests for shortenBio function', () => {
  test('shortenBio should shorten the bio of the original string', () => {
    let sortBio = shortenBio(testData.bio)
    expect(shortBio.length).toBeLessThan(testdata.bio.length)
  })
  test('shortenBio returns string with ... included', () => {
    let shortBio = shortenBio(testData.bio)
  })
})