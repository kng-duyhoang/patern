function getPrice(originalPrice, typePromotion = 'default') {
    // Giam gia khi nguoi dung dat truoc mot san pham vinfast
    if (typePromotion == 'preOrderr') {
        return originalPrice * 0.8
    } // Ở giai đoạn này nếu như bạn hiểu về SOLID thì nó đã phá vỡ nguyên tắc đầu tiên. Đó là nguyên tắc trách nhiệm duy nhất

    //  Nếú rơi vào ngày giảm giá thông thường
    if (typePromotion == "promotion") {}
    // Nếu rơi vào ngày black Firday
    if (typePromotion == 'black-friday') {}
    // Nếu rơi vào ngày 11/11
    if (typePromotion == '11-11') {}
}
