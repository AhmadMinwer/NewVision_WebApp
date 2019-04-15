let students = {
    '0': {
        id: '0',
        name: 'Ahmad Abu Eid',
        CPA: '3259',
        creationDate: '6 june 2014',
        specialty: 'IT',
        CPABalance: '3000',
        phone: '0541234567',
        phone2: '',
        lastLevel: 'a',
        lastDate: '15 Oct 2018',
        terms: 'Aenean a nibh viverra, consectetur urna vitae, pharetra sem. Maecenas ornare elementum fermentum. Aliquam erat volutpat. Fusce imperdiet in risus eu feugiat. Etiam sit amet malesuada justo. Sed ac felis hendrerit, vestibulum nisi vitae, fringilla risus. Vivamus blandit tempus convallis. Maecenas rutrum semper pretium.',
        remarks: 'Aenean a nibh viverra, consectetur urna vitae, pharetra sem. Maecenas ornare elementum fermentum. Aliquam erat volutpat. Fusce imperdiet in risus eu feugiat. Etiam sit amet malesuada justo. Sed ac felis hendrerit, vestibulum nisi vitae, fringilla risus. Vivamus blandit tempus convallis. Maecenas rutrum semper pretium.',
        groups: {
            '0': {
                id: '0',
                exam1: '92/100',
                exam2: 'NAN',
                exam3: 'NAN',
                status: 'finished',
                certificationState: 'null',
                attendance: {
                    '01012015': {
                        date: '1 Jan 2015',
                        notes: '1/2',
                        attended: true,
                    },
                    '03012015': {
                        date: '7 Jan 2015',
                        notes: '3/3',
                        attended: true,
                    }
                }
            },
            '1': {
                id: '1',
                exam1: '85/100',
                exam2: '82/100',
                exam3: '73/100',
                status: 'finished',
                certificationState: 'received',
                attendance: {
                    '01012015': {
                        date: '1 Jan 2015',
                        notes: '1/2',
                        attended: true,
                    },
                    '03012015': {
                        date: '7 Jan 2015',
                        notes: '3/3',
                        attended: false,
                    }
                }
            }
        }
    },
    '1': {
        id: '1',
        name: 'Tamer khader',
        CPA: '353',
        creationDate: '5 April 2017',
        specialty: 'Doctor',
        CPABalance: '0',
        phone: '0543215896',
        phone2: '',
        lastLevel: 'B',
        lastDate: '15 Oct 2018',
        terms: 'Aenean a nibh viverra, consectetur urna vitae, pharetra sem. Maecenas ornare elementum fermentum. Aliquam erat volutpat. Fusce imperdiet in risus eu feugiat. Etiam sit amet malesuada justo. Sed ac felis hendrerit, vestibulum nisi vitae, fringilla risus. Vivamus blandit tempus convallis. Maecenas rutrum semper pretium.',
        remarks: 'Aenean a nibh viverra, consectetur urna vitae, pharetra sem. Maecenas ornare elementum fermentum. Aliquam erat volutpat. Fusce imperdiet in risus eu feugiat. Etiam sit amet malesuada justo. Sed ac felis hendrerit, vestibulum nisi vitae, fringilla risus. Vivamus blandit tempus convallis. Maecenas rutrum semper pretium.',
        groups: {
            '0': {
                id: '0',
                exam1: '92/100',
                exam2: 'NAN',
                exam3: 'NAN',
                status: 'finished',
                certificationState: 'null',
                attendance: {
                    '01012015': {
                        date: '1 Jan 2015',
                        notes: '1/2',
                        attended: false,
                    },
                    '03012015': {
                        date: '7 Jan 2015',
                        notes: '3/3',
                        attended: false,
                    }
                }
            },
            '1': {
                id: '1',
                exam1: '85/100',
                exam2: '82/100',
                exam3: '73/100',
                status: 'finished',
                certificationState: 'received',
                attendance: {
                    '01012015': {
                        date: '1 Jan 2015',
                        notes: '1/2',
                        attended: false,
                    },
                    '03012015': {
                        date: '7 Jan 2015',
                        notes: '3/3',
                        attended: false,
                    }
                }
            }
        }
    }
}

let groups = {
    '0': {
        id: '0',
        name: 'hebrow class level A',
        level: 'A',
        status: 'active',
        teacher: 'shoshi',
        teacher2: 'zeev',
        startDate: '25 Nov 2016',
        endDate: '25 Mar 2017',
        time: 'noon',
        commitLessons: '50',
        accumulatedLessons: '50',
        remarks: 'Aenean a nibh viverra, consectetur urna vitae, pharetra sem. Maecenas ornare elementum fermentum. Aliquam erat volutpat. Fusce imperdiet in risus eu feugiat. Etiam sit amet malesuada justo. Sed ac felis hendrerit, vestibulum nisi vitae, fringilla risus. Vivamus blandit tempus convallis. Maecenas rutrum semper pretium.',
        students: [1,],
    },
    '1': {
        id: '1',
        name: 'hebrow class level B',
        level: 'B',
        status: 'active',
        teacher: 'shoshi',
        teacher2: '',
        startDate: '25 Nov 2017',
        endDate: '25 Mar 2018',
        time: 'morning',
        commitLessons: '50',
        accumulatedLessons: ['01012015', '03012015'],
        remarks: 'Aenean a nibh viverra, consectetur urna vitae, pharetra sem. Maecenas ornare elementum fermentum. Aliquam erat volutpat. Fusce imperdiet in risus eu feugiat. Etiam sit amet malesuada justo. Sed ac felis hendrerit, vestibulum nisi vitae, fringilla risus. Vivamus blandit tempus convallis. Maecenas rutrum semper pretium.',
        students: ['0', '1',],
    },
}

let settings = {
    studentStatus: ['Active', 'Finish', 'Freez'],
    certificationStatus: [],
    groupStatus: ['Active', 'Finish',],
    groupLevel: ['א', 'ב', 'ג', 'ד'],
    groupTime: ['morning', 'noon', 'evening'],
    groupTeacher: [],
}

let queries = {}


export function _getStudents() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...students }), 1000)
    })
}

export function _getGroups() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...groups }), 1000)
    })
}

export function _getSettings() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...settings }), 1000)
    })
}

export function _getQueries() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...queries }), 1000)
    })
}