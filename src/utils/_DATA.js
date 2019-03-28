let students = {
    '0':{
        id:'0',
        name: 'Ahmad Abu Eid',
        CPA: '3259',
        creationDate: '6 june 2014',
        specialty: 'IT',
        CPABalance: '3000',
        phone: '0541234567',
        phone2: '',
        status: 'active',
        lastLevel: 'a',
        lastDate: '15 Oct 2018',
        terms: 'Aenean a nibh viverra, consectetur urna vitae, pharetra sem. Maecenas ornare elementum fermentum. Aliquam erat volutpat. Fusce imperdiet in risus eu feugiat. Etiam sit amet malesuada justo. Sed ac felis hendrerit, vestibulum nisi vitae, fringilla risus. Vivamus blandit tempus convallis. Maecenas rutrum semper pretium.',
        remarks: 'Aenean a nibh viverra, consectetur urna vitae, pharetra sem. Maecenas ornare elementum fermentum. Aliquam erat volutpat. Fusce imperdiet in risus eu feugiat. Etiam sit amet malesuada justo. Sed ac felis hendrerit, vestibulum nisi vitae, fringilla risus. Vivamus blandit tempus convallis. Maecenas rutrum semper pretium.',
        groups: {
            '1' :{
                id: '1',
                exam1:'92/100',
                exam2:'NAN',
                exam3:'NAN',
                certificationState: 'null',
                attendance: {
                    '01012015': {
                        date: '1 Jan 2015',
                        duration: '1/2',
                        excuse: 'NAN'
                    },
                    '03012015':{
                        date: '7 Jan 2015',
                        duration: '3/3',
                        excuse: 'NAN'
                    }
                }
            },
            '2' :{
                id: '2',
                exam1:'85/100',
                exam2:'82/100',
                exam3:'73/100',
                certificationState: 'received',
                attendance: {
                    '01012015': {
                        date: '1 Jan 2015',
                        duration: '1/2',
                        excuse: 'NAN'
                    },
                    '03012015':{
                        date: '7 Jan 2015',
                        duration: '3/3',
                        excuse: 'NAN'
                    }
                }
            }
        }
    }
}

let groups = {
    '0':{
        id:'0',
        name:'hebrow class level A',
        level: 'A',
        status: 'finished',
        teacher: 'shoshi',
        teacher2: 'zeev',
        startDate: '25 Nov 2016',
        endDate: '25 Mar 2017',
        time: 'noon',
        commitLessons: '50',
        accumulatedLessons: '50',
        remarks: 'Aenean a nibh viverra, consectetur urna vitae, pharetra sem. Maecenas ornare elementum fermentum. Aliquam erat volutpat. Fusce imperdiet in risus eu feugiat. Etiam sit amet malesuada justo. Sed ac felis hendrerit, vestibulum nisi vitae, fringilla risus. Vivamus blandit tempus convallis. Maecenas rutrum semper pretium.',
        students : [ 1, ],
    },
    '1':{
        id:'1',
        name:'hebrow class level B',
        level: 'B',
        status: 'Active',
        teacher: 'shoshi',
        teacher2: '',
        startDate: '25 Nov 2017',
        endDate: '25 Mar 2018',
        time: 'morning',
        commitLessons: '50',
        accumulatedLessons: '23',
        remarks: 'Aenean a nibh viverra, consectetur urna vitae, pharetra sem. Maecenas ornare elementum fermentum. Aliquam erat volutpat. Fusce imperdiet in risus eu feugiat. Etiam sit amet malesuada justo. Sed ac felis hendrerit, vestibulum nisi vitae, fringilla risus. Vivamus blandit tempus convallis. Maecenas rutrum semper pretium.',
        students : [ '0', '1', ],
    },
}