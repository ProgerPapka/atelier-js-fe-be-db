import { IFileDocument } from './../model/file';
import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import File, { IFile } from '../model/file';

interface IFileRepository extends IBasicReadableRepository<IFile, IFileDocument>,
                                          IBasicModifiableRepository<IFile, IFileDocument> {
    findByName: (name: string) =>  DocumentQuery<Array<IFile>, IFileDocument> ;
}

class FileRepository implements IFileRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<IFile, IFileDocument> {
        return File.findById(id);
    }

    public findByName(name: string): DocumentQuery<Array<IFile>, IFileDocument>  {
        return File.find({name});
    }

    public findAll(): DocumentQuery<Array<IFile>, IFileDocument> {
        return File.find();
    }

    public save(file: IFile): Promise<IFile> {
        return new File(file).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<IFile, IFileDocument> {
        return File.findByIdAndDelete(id);
    }
}

export default new FileRepository();
