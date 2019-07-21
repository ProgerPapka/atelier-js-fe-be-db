import { IBasicReadableRepository } from './basic/basic-readable-repository';
import { IBasicModifiableRepository } from './basic/basic-modifiable-repository';
import { Schema, DocumentQuery } from 'mongoose';
import File, { IFile } from '../model/file';

interface IFileRepository extends IBasicReadableRepository<IFile>,
                                          IBasicModifiableRepository<IFile> {
    findByName: (name: string) =>  DocumentQuery<Array<IFile>, IFile> ;
}

class FileRepository implements IFileRepository {

    public findById(id: Schema.Types.ObjectId): DocumentQuery<IFile, IFile> {
        return File.findById(id);
    }

    public findByName(name: string): DocumentQuery<Array<IFile>, IFile>  {
        return File.find({name});
    }

    public findAll(): DocumentQuery<Array<IFile>, IFile> {
        return File.find();
    }

    public save(file: IFile): Promise<IFile> {
        return new File(file).save();
    }

    public remove(id: Schema.Types.ObjectId): DocumentQuery<IFile, IFile> {
        return File.findByIdAndDelete(id);
    }
}

export default new FileRepository();
